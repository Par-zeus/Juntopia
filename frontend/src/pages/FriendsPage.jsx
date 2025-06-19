import { useQuery } from "@tanstack/react-query";
import { getUserFriends } from "../lib/api";
import FriendCard from "../components/FriendCard";

const FriendsPage = () => {
  const { data: friends = [], isLoading } = useQuery({
    queryKey: ["friends"],
    queryFn: getUserFriends,
  });

  if (isLoading) {
    return (
      <div className="flex justify-center py-12">
        <span className="loading loading-spinner loading-lg" />
      </div>
    );
  }

  if (friends.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-64">
        <p className="text-lg text-gray-500 mb-4">You don't have any friends yet</p>
        <p className="text-sm text-gray-400">Find and add friends to start chatting</p>
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="container mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-6">Your Friends</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 auto-rows-fr">
          {friends.map((friend) => (
            <div key={friend._id} className="flex">
              <FriendCard friend={friend} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FriendsPage;
