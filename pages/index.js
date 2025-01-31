import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import LoginButton from "./components/login-btn";

export default function Home() {
  return (
    <div>
      <h1>Welcome to Pokempanion</h1>
      <LoginButton />
    </div>
  );
}