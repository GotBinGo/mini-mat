<script>
// import Button from '@mini-mat/button';

import Button from './components/Button/Button.svelte'
// import Input from './components/Input/Input.svelte'
let click = () => {
    console.log('click');
    disabled = !disabled;
}
let disabled = true;

</script>
<div>
    <span>
        <Button on:click={click} type="basic">Button</Button>
    </span>
    <span>
        <Button on:click={click} type="raised">Button</Button>
    </span>
    <span>
        <Button on:click={click} type="outlined">Button</Button>
    </span>
</div>
<div>
    <span>
        <Button on:click={click} bind:disabled type="basic">Button</Button>
    </span>
    <span>
        <Button on:click={click} bind:disabled type="raised">Button</Button>
    </span>
    <span>
        <Button  on:click={click} bind:disabled type="outlined">Button</Button>
    </span>
</div>

<style>
span, div {
    margin: 5px;
}
</style>