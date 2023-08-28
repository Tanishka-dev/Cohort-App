import * as z from "zod";
export const UserVaildations = z.object({
  profile_photo: z.string().url().nonempty(),
  name: z.string().min(3).max(0),
  username: z.string().min(3).max(0),
  bio: z.string().min(3).max(1000),
});
