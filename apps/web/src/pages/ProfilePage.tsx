import { useParams } from 'react-router';
import { useProfileQuery } from '../state/profile';

const ProfilePage = () => {
  const { username } = useParams();
  const { data: user, isLoading } = useProfileQuery(username!);

  if (isLoading) return <p>Loading...</p>;

  if (!user) return <p>User not found.</p>;

  return (
    <div className="container mx-auto max-w-3xl px-4 py-2">
      <section className="rounded-lg p-4">
        <h2 className="mb-2 font-medium">Profile of: {username}</h2>
        <div className="flex flex-col items-start gap-2">
          <div className="p-2">
            <div className="flex items-center space-x-5">
              <div className="h-24 w-24 rounded-full bg-gray-200 animate-pulse" />
              <div>
                <div className="font-medium">{user.username}</div>
                {user.bio && <p className="text-neutral-600"> {user.bio}</p>}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProfilePage;
