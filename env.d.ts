/// <reference types="vite/client" />

import type { CommonOptions } from "child_process"
import type { compile } from "vue"

declare module '*.vue'{
    import { ComponentOptions } from "vue"
    const componentOptions: CommonOptions
    export default componentOptions
}