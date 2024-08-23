<script setup>
// Define the type of the props
const props = defineProps({
    date: {
        type: [Object, String],
        required: true,
        validator: (value) => {
            // If it's a string, pass validation
            if (typeof value === 'string') return true;
            // If it's an object, ensure it has valid properties
            return typeof value.time === 'number' && typeof value.string === 'string';
        },
    },
});

function getDateTime() {
    // Handle case where props.date is an object with a time property
    if (typeof props.date === 'object' && props.date.time) {
        return new Date(props.date.time).toISOString();
    }
    // If props.date is a string, return it as is
    return props.date;
}
</script>

<template>
    <dl>
        <dt class="sr-only">Published on</dt>
        <dd class="text-base leading-6 font-medium text-gray-500 dark:text-gray-300">
            <!-- Use getDateTime to generate the time attribute and display date.string if it's an object -->
            <time :datetime="getDateTime()">
                {{ typeof props.date === 'object' ? props.date.string : props.date }}
            </time>
        </dd>
    </dl>
</template>
