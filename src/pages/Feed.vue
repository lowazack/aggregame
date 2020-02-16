<template>
    <div class="feed">
    </div>
</template>

<script>
export default {
  data: function () {
    return {
      teams: {},
      games: {}
    }
  },
  mounted () {
    this.getNbaTeams()
    this.getGames()
  },
  methods: {
    getNbaTeams () {
      this.axios.get('https://free-nba.p.rapidapi.com/teams')
        .then(response => {
          this.teams = response.data
        }).catch(error => {
          console.log(error)
        })
    },
    getGames () {
      this.axios.get('https://free-nba.p.rapidapi.com/games')
        .then(response => {
          this.games = response.data
        }).catch(error => {
          console.log(error)
        })
    }
  }
}
</script>

<style lang="scss">
    $this: ".this";
    #{$this}{
        display: flex;
    }
</style>
