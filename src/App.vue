<template lang="pug">
//- keep-alive
router-view(:key="$route.fullPath")
</template>

<style>
@import "/css/public.css";
</style>
