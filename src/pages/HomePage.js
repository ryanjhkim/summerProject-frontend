import HomePageList from '../components/HomePage/HomePageList';
// import logo from './images/Yasic.png'

const DUMMY_DATA = [
    {
        id: '',
        title: '',
        image: "https://cdn.shopify.com/shopifycloud/hatchful-web/assets/d80321286525089fe6b5a5d4759d0efd.svg",
        address: '',
        description: ''
    },
    {
        id: '',
        title: '',
        image: 'https://commons.wikimedia.org/wiki/File:Z%C3%BCrich_view_Quaibr%C3%BCcke_20200702.jpg',
        address: '',
        description: ''
    },
    {
        id: '',
        title: '',
        image: 'https://commons.wikimedia.org/wiki/File:Z%C3%BCrich_view_Quaibr%C3%BCcke_20200702.jpg',
        address: '',
        description: ''
    }
];


function HomePage() {
    return (
        <section>
            <h1>This is the Home Page!!</h1>
            <HomePageList homePageInputs={DUMMY_DATA}/>
        </section>
    );
}

export default HomePage;