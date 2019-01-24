<template>
	<ion-tabs>
		<ion-tab tab="home">
			<ion-content>
				<ion-vue-router :animated="false" />
			</ion-content>
		</ion-tab>
		<ion-tab tab="settings">
			<ion-content>
				<ion-vue-router :animated="false" />
			</ion-content>
		</ion-tab>

		<ion-tab-bar slot="bottom">

			<ion-tab-button tab="home" @click="$router.push('/')">
				<ion-label>Home</ion-label>
				<ion-icon name="home"></ion-icon>
				<ion-badge>6</ion-badge>
			</ion-tab-button>

			<ion-tab-button tab="settings" @click="$router.push('/about')">
				<ion-label>About</ion-label>
				<ion-icon name="settings"></ion-icon>
			</ion-tab-button>

		</ion-tab-bar>
	</ion-tabs>
	<!-- <div class="app">
		<div class="nav">
			<router-link to="/">Home</router-link> |
			<router-link to="/about">About</router-link>
		</div>
		<router-view />
	</div> -->
</template>

<style>
.app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.nav {
  padding: 30px;
}

.nav a {
  font-weight: bold;
  color: #2c3e50;
}

.nav a.router-link-exact-active {
  color: #42b983;
}
</style>
