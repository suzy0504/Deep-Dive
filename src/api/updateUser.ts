import type { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "@/supabase/supabaseClient";

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    const { id, nickname, profile_picture } = req.body;

    if (!id || !nickname || !profile_picture) {
      return res.status(400).json({ message: "Invalid request data" });
    }

    const { data, error } = await supabase
      .from("users")
      .update({ nickname, profile_picture })
      .eq("id", id);

    if (error) {
      return res.status(500).json({ message: "Error updating user" });
    }

    res.status(200).json({ message: "User updated successfully" });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
