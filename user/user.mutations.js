import client from "../client";
import bcrypt from "bcrypt";

export default {
  Mutation: {
    createAccount: async (
      _,
      { username, password, email, name, location, avatarURL, githubUserName }
    ) => {
      try {
        // check username and email, whether already taken or not
        const existingUser = await client.user.findFirst({
          where: { OR: [{ username }, { email }] },
        });
        if (existingUser) throw new Error("username or email is already taken");

        const hashedPassword = await bcrypt.hash(password, 10);
        console.log(hashedPassword, password, username);
        const newUser = await client.user.create({
          data: {
            username,
            password: hashedPassword,
            email,
            name,
            location,
            avatarURL,
            githubUserName,
          },
        });

        if (newUser == null)
          throw new Error("something is wrong during insert data");

        return { ok: true };
      } catch (error) {
        return { ok: false, error };
      }
    },
  },
};
