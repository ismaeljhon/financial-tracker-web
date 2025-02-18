<script setup lang="ts">
import { version } from '../../package.json'
</script>
<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>

        <q-toolbar-title>
          Financial Tracker App
        </q-toolbar-title>

        <div>Web version v{{ version }}</div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
