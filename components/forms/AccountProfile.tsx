"use client";

interface Props {
  user: {
    id: string | undefined;
    objectId: string;
    username: string;
    name: string;
    bio: string;
    image: string;
  };
  btnType: string;
}

const AccountProfile = ({ user, btnType }: Props) => {
  return <div>hey</div>;
};

export default AccountProfile;
