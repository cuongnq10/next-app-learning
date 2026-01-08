"use server";
import { signIn } from "./auth";

 

export async function sigInAction() {
    await signIn('google', {redirectTo: '/account'})
}