import { Link } from 'react-router';
import { useUsersQuery } from '../state/users';

const UsersPage = () => {
  const { data: users, isLoading } = useUsersQuery();

  if (!users) return <p>failed to fetch users</p>;
  if (isLoading) return <p>Loading users...</p>;

  return (
    <div className="container mx-auto max-w-3xl px-4 py-2">
      <div className="grid gap-6">
        <section className="rounded-lg p-4">
          <h2 className="mb-2 font-medium">Users list:</h2>
          <div className="flex flex-col items-start gap-2">
            {users.map((user) => (
              <div key={user.id} className="p-2">
                <div className="flex items-center space-x-5">
                  <div className="h-10 w-10 rounded-full bg-gray-200 animate-pulse" />
                  <div>
                    <Link to={`/p/${user.username}`} className="font-medium">
                      {user.username}
                    </Link>
                    {user.bio && <p className="text-sm text-neutral-600"> {user.bio}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default UsersPage;
