import { Connect } from "uport-connect";

// export let uport = new Connect('TruffleBox')

export let uport = new Connect("Persol", {
	network: "rinkeby",
	profileImage: { "/": "/ipfs/QmWucD59PAW9Am3LEWdCQUwEfipw7tgZKw1iLCueErbod1" },
	bannerImage: { "/": "/ipfs/QmXuH4EfrLQt2fafeGs1GyHjq71CdKp9E3esiq5vYQDLUM" },
	description: "Persol DID Demo",
});

export const web3 = uport.getWeb3();
