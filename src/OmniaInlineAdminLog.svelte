<script lang="ts">
  import { makeNewUrl } from "./util";

  export let log: any;

  const getUserUrlByUsername = (username: string) => {
    const newParams = new URLSearchParams();
    newParams.set("u", "username");
    newParams.set("c", username);
    return makeNewUrl(newParams);
  };
</script>

{#if log.operation === "删贴"}
  <div class="mt-4 p-3 rounded bg-red-50 text-sm">
    <p>
      <a href={getUserUrlByUsername(log.operator)} class="hover:underline">{log.operator}</a> 于 {log.operation_time} 删除了{log.post_id
        ? "这条回复"
        : "这个帖子"}。
    </p>
  </div>
{:else if log.operation === "恢复删贴"}
  <div class="mt-4 p-3 rounded bg-emerald-50 text-sm">
    <p><a href={getUserUrlByUsername(log.operator)} class="hover:underline">{log.operator}</a> 于 {log.operation_time} 恢复了这个帖子。</p>
  </div>
{:else if log.operation === "加精"}
  <div class="mt-4 p-3 rounded bg-yellow-50 text-sm">
    <p><a href={getUserUrlByUsername(log.operator)} class="hover:underline">{log.operator}</a> 于 {log.operation_time} 加精了这个帖子。</p>
  </div>
{:else if log.operation === "取消加精"}
  <div class="mt-4 p-3 rounded bg-yellow-50 text-sm">
    <p><a href={getUserUrlByUsername(log.operator)} class="hover:underline">{log.operator}</a> 于 {log.operation_time} 将这个帖子取消加精。</p>
  </div>
{:else if log.operation === "置顶"}
  <div class="mt-4 p-3 rounded bg-blue-50 text-sm">
    <p><a href={getUserUrlByUsername(log.operator)} class="hover:underline">{log.operator}</a> 于 {log.operation_time} 置顶了这个帖子。</p>
  </div>
{:else if log.operation === "取消置顶"}
  <div class="mt-4 p-3 rounded bg-blue-50 text-sm">
    <p><a href={getUserUrlByUsername(log.operator)} class="hover:underline">{log.operator}</a> 于 {log.operation_time} 将这个帖子取消置顶。</p>
  </div>
{/if}
