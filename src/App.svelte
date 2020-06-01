<script>
	import { Tabs, TabList, TabPanel, Tab } from './components/tabs/tabs.js';
	import News from "./components/News.svelte";
	import SeHilsninger from "./components/SeHilsninger.svelte";
	import SendHilsen from "./components/SendHilsen.svelte";

</script>

<Tabs>
	<TabList>
		<Tab>News!</Tab>
		<Tab>Hilsninger</Tab>
		<Tab>Send din hilsen!</Tab>
	</TabList>

	<TabPanel>
		<News />
	</TabPanel>

	<TabPanel>
		<SeHilsninger />
	</TabPanel>

	<TabPanel>
		<h2>Third panel</h2>
		<SendHilsen />
	</TabPanel>
</Tabs>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>