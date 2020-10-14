<script>
// import Button from '@mini-mat/button';

import Button from './components/Button/Button.svelte'
// import Input from './components/Input/Input.svelte'
</script>
<div>
    <span>
        <Button type="basic">Button</Button>
    </span>
    <span>
        <Button type="raised">Button</Button>
    </span>
    <span>
        <Button type="outlined">Button</Button>
    </span>
</div>
<div>
    <span>
        <Button disabled type="basic">Button</Button>
    </span>
    <span>
        <Button disabled type="raised">Button</Button>
    </span>
    <span>
        <Button disabled type="outlined">Button</Button>
    </span>
</div>

<style>
span, div {
    margin: 5px;
}
</style>