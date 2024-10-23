export default function (eleventyConfig) {

    eleventyConfig.addPassthroughCopy('src/assets');
    eleventyConfig.addCollection("post", function(collectionApi) {
        return collectionApi.getFilteredByGlob("./src/posts/*.md");
    });

    return {
        dir: {
            input: 'src',
            output: 'build',
        }
    }
}