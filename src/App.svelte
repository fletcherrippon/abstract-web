<script lang="ts">
  import View from "./components/3D/scene.svelte";
  import Button from "./components/Button/Button.svelte";
</script>

<main
  class="min-h-screen h-full flex flex-col bg-black relative bg-gradient-to-br from-gray-950"
>
  <div class="my-auto">
    <div class="container flex">
      <div class="flex gap-6 flex-col items-start mr-auto relative z-10">
        <div
          class="top-0 left-0 bg-gradient-radial from-[rgba(97,61,135,0.10)] to-transparent absolute w-full h-full blur-3xl rounded-3xl -z-10 scale-110"
        ></div>
        <h1 class="text-violet-100 font-bold text-6xl">Hello World</h1>
        <p class="text-violet-200 max-w-xl">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab dolores
          magnam molestias quibusdam suscipit quaerat nulla, veritatis dolor qui
          quos debitis provident accusamus modi tenetur dolorum voluptatem,
          recusandae quod aspernatur!
        </p>
        <Button />
      </div>
    </div>
  </div>
  <View />
</main>

<style global lang="postcss">
  @tailwind utilities;
  @tailwind components;
  @tailwind base;
</style>
