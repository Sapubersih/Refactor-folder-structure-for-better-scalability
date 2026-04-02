export class AuthService {
  login(username: string, password: string) {
    if (username === "admin" && password === "admin") {
      return {
        token: "fake-jwt-token",
        user: { username },
      };
    }

    throw new Error("Invalid credentials");
  }
}
