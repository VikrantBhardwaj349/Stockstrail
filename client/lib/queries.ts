import { supabase, type NewQueryInput } from "./supabase";

export const addQuery = async (payload: NewQueryInput) => {
  const { error } = await supabase.from("queries").insert([payload]);

  if (error) {
    console.error("Error adding query:", error);
    return { data: null, error };
  }

  return { data: null, error: null };
};
