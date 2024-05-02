import Link from "next/link";

import { Container, Title, Main, Description } from "@/components/sharedstyles";
import Form from "@/components/Form";

export default function About() {
	return (
		<Container>
			<Main>
				<Title> Newsletter Signup</Title>
				<Description>
					<Link href="/">&larr; Go Back</Link>
				</Description>
				<Form />
			</Main>
		</Container>
	);
}
