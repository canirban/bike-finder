import AvailableStations from "../components/AvailableStations";
import Page from "../components/Page";
import url from "../components/utils/endpoint";

export default function Home({ stations }) {
  return (
    <Page title="Home">
      <AvailableStations availableStations={stations} />
    </Page>
  );
}
export async function getStaticProps() {
  try {
    const response = await fetch(url);
    const stations = await response.json();
    stations.sort((a,b)=> (a.name.toLowerCase() > b.name.toLowerCase()) ? 1 : ((b.name.toLowerCase() > a.name.toLowerCase()) ? -1 : 0))
    return { props: { stations 
    } };
  } catch (e) {}
  return { props: { stations: [] } };
}
