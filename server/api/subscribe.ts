import { promises as fs } from "fs";
import path from "path";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const email = body.email?.trim();

  if (!email || !email.includes("@")) {
    return { message: "Invalid email" };
  }

  const dir = path.resolve('subscribers')
  const filePath = path.join(dir, 'emails.txt')

  try {
    await fs.mkdir(dir, { recursive: true})
    await fs.appendFile(filePath, email + '\n')
    return { message: 'Successfully subscribed!' }
  } catch (error) {
    console.error(error)
    return { message: 'Error saving email' }
  }
});
