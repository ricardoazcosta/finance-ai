import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import { redirect } from "next/navigation";
import { ClerkSignInButton } from "../_components/auth/sign-in-button";

const LoginPage = async () => {
	const { userId } = await auth();
	if (userId) {
		redirect("/");
	}
	return (
		<div className="grid h-full grid-cols-2">
			{/*ESQUERDA*/}
			<div className="mx-auto flex h-full max-w-[500px] flex-col justify-center p-8">
				<Image src="logo.svg" width={173} height={40} alt="FinanciAI" className="mb-8" />
				<h1 className="mb-3 text-4xl font-bold">Bem Vindo</h1>
				<p className="mb-8 text-muted-foreground">
					A Finance AI é uma plataforma de gestão financeira que utiliza IA para monitorar
					suas movimentações, e oferecer insights personalizados, facilitando o controle
					do seu orçamento.
				</p>
				<ClerkSignInButton />
			</div>
			{/*DIREITA*/}
			<div className="relative h-full w-full">
				<Image src="/login2.png" alt="Faça o login" fill className="object-cover" />
			</div>
		</div>
	);
};

export default LoginPage;
