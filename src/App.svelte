<script>
	import { Tabs, TabList, TabPanel, Tab } from './components/tabs/tabs.js';
	import News from "./components/News.svelte";
	import Statistikk from "./components/Statistikk.svelte";
	import SeHilsninger from "./components/SeHilsninger.svelte";
	import SendHilsen from "./components/SendHilsen.svelte";

</script>
<main>
<Tabs>
	<TabList>
		<Tab>News!</Tab>
		<Tab>Statistikk</Tab>
		<Tab>Hilsninger</Tab>
		<Tab>Send din hilsen!</Tab>
	</TabList>

	<TabPanel>
		<News />
	</TabPanel>

	<TabPanel>
		<Statistikk />
	</TabPanel>

	<TabPanel>
		<SeHilsninger />
	</TabPanel>

	<TabPanel>
		<SendHilsen />
	</TabPanel>

</Tabs>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>