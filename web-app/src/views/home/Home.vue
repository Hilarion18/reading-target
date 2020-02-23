<template>
  <div class="home">
    <target-section/>
  </div>
</template>

<script>
// @ is an alias to /src
import TargetSection from './components/TargetSection'

export default {
  name: 'Home',
  components: {
    TargetSection
  }
}
</script>
