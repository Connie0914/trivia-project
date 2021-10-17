import { NextPage } from 'next';
import { Button } from '../components/Button'

const Index: NextPage = () => {
  return (
    <>
      <h1 className="italic font-bold">Welcome!</h1>
      <p>Hello~</p>
      <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Button</Button>
    </>
  )
};

export default Index;