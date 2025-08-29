import { Metadata } from "next";

export const generateMetadata = async ({
  searchParams,
}: {
  searchParams: { title?: string };
}): Promise<Metadata> => {
  const titleFromQuery = searchParams?.title;
  const title = titleFromQuery
    ? `${titleFromQuery} | codingIn`
    : "Register | codingIn";
  return {
    title: title,
    description: "Register Page",
    openGraph: {
      title: title,
      description: "create a new account",
      url: "https://codingin.com/register",
      siteName: "codingIn",
      images: [
        {
          url: "register.png",
        },
      ],
    },
  };
};

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      ini Register Page menggunakan Route Group
    </div>
  );
}
