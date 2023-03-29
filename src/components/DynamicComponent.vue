<template>
<div class="dynamic-component">
    <div class="tabs">
    <div
        v-for="(tab, index) in tabs"
        :key="index"
        :class="{ active: activeTab === index }"
        @click="activeTab = index"
    >
        {{ tab }}
    </div>
    </div>
    <div class="content">
    <TabContent
        v-for="(item, index) in items"
        :key="index"
        :title="tabTitles[index]"
        :content="item"
        v-show="activeTab === index"
    />
    </div>
</div>
</template>

<script>
import { ref } from 'vue';
import TabContent from './TabContent.vue';

export default {
name: 'DynamicComponent',
components: {
    TabContent,
},
setup() {
    const tabs = ref(['综合', '公告', '赛事', '攻略', '社区']);
    const items = ref([
    '综合内容',
    '公告内容',
    '赛事内容',
    '攻略内容',
    '社区内容',
    ]);
    const activeTab = ref(0);

    const tabTitles = ref(['Title1', 'Title2', 'Title3', 'Title4', 'Title5']);

    return {
    tabs,
    items,
    activeTab,
    tabTitles,
    };
},
};
</script>

<style scoped>
.dynamic-component {
display: flex;
flex-direction: column;
}

.tabs {
display: flex;
}

.tabs > div {
padding: 10px;
cursor: pointer;
}

.tabs > .active {
background-color: #eee;
}

.content > div {
padding: 10px;
}
</style>