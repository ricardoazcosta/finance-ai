"use client";

import { SignInButton } from "@clerk/nextjs";
import { LogIn } from "lucide-react";
import { Button } from "../ui/button";

export function ClerkSignInButton() {
	return (
		<SignInButton>
			<Button variant={"outline"}>
				<LogIn className="mr-2" />
				Fazer Login ou criar conta
			</Button>
		</SignInButton>
	);
}
