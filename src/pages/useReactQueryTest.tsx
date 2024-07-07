import React from 'react';
import { useQuery } from 'react-query';

// User 타입 정의
type User = {
  id: number;
  name: string;
};

// 서버에서 사용자 데이터를 가져오는 함수
const fetchUsers = async (): Promise<User[]> => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

// UseReactQueryTest 컴포넌트
const UseReactQueryTest: React.FC = () => {
  // useQuery 훅을 사용하여 서버 상태를 가져옴
  // 'users'는 쿼리 키, fetchUsers는 데이터를 가져오는 함수 
  const { data, error, isLoading } = useQuery<User[], Error>('users', fetchUsers);

  // isLoading 상태: 데이터가 로딩 중일 때 true
  if (isLoading) return <div>Loading...</div>;

  // error 상태: 데이터 가져오기 실패 시 에러 객체를 담음
  if (error) return <div>Error: {error.message}</div>;

  // data 상태: 성공적으로 데이터를 가져오면 데이터를 담음
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {data?.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UseReactQueryTest;
