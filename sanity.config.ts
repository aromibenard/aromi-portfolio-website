import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";

const config = defineConfig({
    projectId: "91nm5tao",
    dataset: "production",
    title: "Aromi Portfolio Website",
    apiVersion: "2023-27-07",
    basePath: "/admin",
    plugins: [deskTool()],
    schema: { types: schemas}
})

export default config;