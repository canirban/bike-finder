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
    return { props: { stations } };
  } catch (e) {}
  return { props: { stations: [] } };
}
