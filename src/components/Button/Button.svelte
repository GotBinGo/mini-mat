<script>
import { onMount } from 'svelte';
let btn;
export let type = 'raised';
export let disabled = false;
let sampleSpan;

onMount(() => {
    sampleSpan.remove();
});

async function ripple(e) {
    if (disabled) {
        return;
    }
    // const circle = document.createElement("span");
    const circle = sampleSpan.cloneNode();
    const target = e.currentTarget;
    const d = Math.max(target.clientWidth, target.clientHeight);
    const removeCircle = () => {
      circle.remove();
      circle.removeEventListener("animationend", removeCircle);
    };

    circle.addEventListener("animationend", removeCircle);
    circle.style.width = circle.style.height = `${d}px`;
    const rect = target.getBoundingClientRect();

    circle.style.left = `${e.clientX - rect.left - d / 2}px`;
    circle.style.top = `${e.clientY - rect.top - d / 2}px`;

    circle.style.display = 'initial';

    btn.appendChild(circle);
}
</script>

<button bind:this={btn} on:click={ripple} class="button" 
    class:outlined="{type == 'outlined'}"
    class:raised="{type == 'raised'}"
    class:disabled="{disabled}">
<slot />

</button>
<span style="display:none" bind:this={sampleSpan} class="ripple-span bg-primary-trans ripple-normal ripple">a</span>


<style>

@keyframes ripple-normal {to{-webkit-transform:scale(2.5);transform:scale(2.5);opacity:0}}
.ripple-normal{-webkit-animation:ripple-normal .6s;animation:ripple-normal .6s}
.bg-primary-trans{background-color:rgba(231,190,231,.7)}
.ripple{border-radius:50%;position:absolute;-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0)}

.button.outlined {
    border: 1px solid rgba(0,0,0,.12);
}

.button.outlined.disabled {
    border: 1px solid rgba(0, 0, 0, 0.26);
}

.button.disabled {
    color: rgba(0,0,0,.26);
    cursor: initial;
}

.button.raised.disabled {
    background-color: rgba(0,0,0,.12);
}

.button {
    outline:0;
    box-sizing: border-box;
    border: 0 solid #e0e0e0;
    color: inherit;
    cursor: pointer;

    background-color: rgba(0,0,0,0);
    background-image: none;

    -webkit-appearance: button;

    text-transform: none;

    overflow: visible;

    font-family: inherit;
    font-size: 100%;
    line-height: 20px;
    margin: 0;
    transition-duration: .2s;

    letter-spacing: .0892857143em;
    text-transform: uppercase;
    position: relative;

    padding-left: 1rem;
    padding-right: 1rem;

    padding-top: .5rem;
    padding-bottom: .5rem;

    overflow: hidden;

    font-size: .875rem;


    font-weight: 500;

    border-radius: .25rem;
}

.raised {
    box-shadow: 0 3px 3px -2px rgba(0,0,0,.2), 0 3px 4px 0 rgba(0,0,0,.14), 0 1px 8px 0 rgba(0,0,0,.12);
    --bg-opacity: 1;
    background-color: #b027b0;
    background-color: rgba(176,39,176,var(--bg-opacity));

    --text-opacity: 1;
    color: #fff;
    color: rgba(255,255,255,var(--text-opacity));
}
.raised:hover{
    box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 5px 8px 0 rgba(0,0,0,.14),0 1px 14px 0 rgba(0,0,0,.12);
    --bg-opacity:1;background-color:#bc47bc;
    background-color:rgba(188,71,188,var(--bg-opacity))
}

.raised.disabled:hover{
    box-shadow: 0 3px 3px -2px rgba(0,0,0,.2), 0 3px 4px 0 rgba(0,0,0,.14), 0 1px 8px 0 rgba(0,0,0,.12);

}


</style>