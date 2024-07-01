import React from 'react';
import { useMutation, useQueryClient } from 'react-query';

type User = {
  id?: number;
  name: string;
};

const addUser = async (newUser: User): Promise<User> => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newUser),
  });
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const useMutationTest: React.FC = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation(addUser, {
    onSuccess: () => {
      // 성공적으로 추가된 후 users 데이터를 무효화하여 최신 데이터로 다시 가져오게 합니다.
      queryClient.invalidateQueries('users');
    },
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newUser: User = {
      name: formData.get('name') as string,
    };
    mutation.mutate(newUser);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" required />
      </label>
      <button type="submit">Add User</button>
      {mutation.isLoading ? <p>Adding user...</p> : null}
      {mutation.isError ? <p>Error adding user</p> : null}
    </form>
  );
};

export default useMutationTest;
