import { Quattrocento_Sans } from "next/font/google";

export default async function PhotoPage({
    params,
}: {
    params: Promise<{   id: string}>;
}) {
 const { id } = await params;
    return <h1>Photo Page ID: {id}</h1>; 
}Quattrocento_Sans