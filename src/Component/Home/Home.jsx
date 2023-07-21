import Center from "../Center/Center";
import Left from "../Left/Left";
import Right from "../Right/Right";

const Home = () => {
    return (
        <div className="rounded-xl lg:flex w-full bg-white text-black">
            {/* <Nav></Nav> */}
            <Left></Left>
            <Center></Center>
            <Right></Right>
        </div>
    );
};

export default Home;