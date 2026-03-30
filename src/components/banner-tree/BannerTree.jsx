import Card from './Card';
const getData = async () => {
    const res = await fetch('/public/data.json');
    return res.json();
}
const getPromise = getData();

const BannerTree = () => {
    return (
        <div className='contain mx-auto'>
            <Card getPromise={getPromise}></Card>
        </div>
    );
};

export default BannerTree;