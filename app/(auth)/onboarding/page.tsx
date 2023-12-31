import AccountProfile from "@/components/forms/AccountProfile";
import { currentUser } from "@clerk/nextjs";
async function Page() {
  const user = await currentUser();

  const userInfo = {};

  const userData = {
    id: user?.id,
    objectId: userInfo?._id,
    username: userInfo?.username || user?.username,
    name: userInfo?.name || user?.firstName || "",
    bio: userInfo?.bio || "",
    image: userInfo?.image || user?.imageUrl,
  };
  return (
    <main className="mx-auto px-10 py-20 flex max-w-3xl flex-col justify-start">
      <h1 className="head-text">Fueling Your Engineering Passion; </h1>
      <p className="mt-3 text-base-regular text-[#c4c4c8]">
        Share Challenges, Spark Solutions, and Elevate Your Expertise in Tech.
      </p>
      <section className="mt-9 p-10 bg-[#1E293B]">
        <AccountProfile user={userData} btnType="Get Started" />
      </section>
    </main>
  );
}

export default Page;
