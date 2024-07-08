import { supabase } from "@/supabase/supabaseClient";
import Swal from "sweetalert2";
import { Tables, TablesInsert } from "@/types/supabase";

type User = Tables<"users">;
type UserInsert = TablesInsert<"users">;

export const signUpWithEmail = async ({
  email,
  password,
  nickname,
}: {
  email: string;
  password: string;
  nickname: string;
}) => {
  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) throw error;
    if (data.user) {
      const { id, email } = data.user;
      await insertUserData({ id, email, nickname });
      Swal.fire("Success", "회원가입에 성공하였습니다!", "success");
    }
  } catch (error: any) {
    console.error("회원가입 중 오류가 발생했습니다:", error.message);
    Swal.fire("Error", "회원가입 중 오류가 발생했습니다.", "error");
  }
};

//로그인 시도
export const loginWithEmail = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw error;
    if (data && data.user) {
      Swal.fire("Success", "로그인에 성공하였습니다.", "success");
      localStorage.clear();
      return await getUserInfo(data.user.id);
    }
  } catch (error: any) {
    console.error("로그인 중 오류가 발생하였습니다:", error.message);
    Swal.fire("Error", "로그인 중 오류가 발생하였습니다.", "error");
  }
  return null;
};

//로그아웃
export const signOut = async () => {
  try {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    Swal.fire("Success", "로그아웃 되었습니다.", "success");
    localStorage.clear();
  } catch (error: any) {
    console.error("로그아웃 중 오류가 발생했습니다:", error.message);
    Swal.fire("Error", "로그아웃 중 오류가 발생했습니다.", "error");
  }
};

//db테이블에 사용자 데이터 삽입
export const insertUserData = async (userInfo: UserInsert) => {
  try {
    const { id, email, nickname } = userInfo;
    const { error } = await supabase.from("users").insert({
      id,
      created_at: new Date().toISOString(),
      email,
      nickname,
    });
    if (error) throw error;
  } catch (error: any) {
    console.error("회원 정보 저장 중 오류가 발생했습니다:", error.message);
    Swal.fire("Error", "유저 정보 조회 중 오류가 발생하였습니다.", "error");
  }
};

//특정 사용자의 추가정보가져오기
export const getUserInfo = async (userId: string) => {
  try {
    const { data, error } = await supabase
      .from("users")
      .select("*")
      .eq("id", userId);
    if (error) throw error;
    if (data && data.length > 0) {
      const { id, nickname } = data[0];
      return { id, nickname };
    }
  } catch (error: any) {
    console.error("유저 정보 조회 중 오류가 발생하였습니다:", error.message);
    Swal.fire("Error", "유저 정보 조회 중 오류가 발생하였습니다.", "error");
  }
  return null;
};

export const isEmailRegistered = async ({ email }: { email: string }) => {
  try {
    const { data, error } = await supabase
      .from("users")
      .select("*")
      .eq("email", email);
    if (error) throw error;

    if (data.length > 0) {
      Swal.fire("Info", "이미 가입된 이메일입니다.", "info");
      return false;
    } else {
      return true;
    }
  } catch (error: any) {
    console.error("이메일 확인 중 오류가 발생하였습니다:", error.message);
    Swal.fire("Error", "이메일 확인 중 오류가 발생하였습니다.", "error");
  }
};
