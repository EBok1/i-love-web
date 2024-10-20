export default function (eleventyConfig) {
    eleventyConfig.addCollection("post", function(collectionApi) {
        return collectionApi.getFilteredByGlob("src/posts/*.md");
    });

    return {
        dir: {
            input: 'src',
            includes: '_includes',
            output: '_site',
        }
    }
}