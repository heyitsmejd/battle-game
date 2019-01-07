<template>
  <transition name="modal-fade">
  <div class="modal-backdrop">
    <div class="modal rounded">
      <section class="modal-body">
        <slot name="body">
         Better luck next time chump.
         <hr>
         <p>Would you like to try again?</p>
         <hr>
         <button class="btn-info rounded mr-5">Yes</button><button @click="selectRegion" class="btn-warning rounded">No</button>
        </slot>
       </section>
    </div>
  </div>
</transition>
</template>

<script>
  export default {
    name: 'modal',

    methods: {
      close() {
        this.$emit('close');
      },
      selectRegion() {
        this.$emit('selectRegion');
      },
    },
  };
</script>
<style>
  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.9);
    display: flex;
    justify-content: center;
    align-items: center;
  }

.modal {
   background-color: rgba(0, 0, 0, 0.7);
    border: solid 1px gold;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 35%;
    top: 30%;
    left: 25%;
    color: black;
}

  .modal-header,
  .modal-footer {
    font-family: 'Rammetto One', cursive;
    text-align: center;
    color: orange;
    font-weight: bold;
    font-size: 32px;
    -webkit-text-stroke: 1px black;
    text-shadow: 3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
    padding: 15px;
    text-align: center;

  }

  .modal-header {
    text-align: center;
    border-bottom: 1px solid black;
    color: #4AAE9B;
    justify-content: space-between;
  }

  .modal-footer {
    border-top: 1px solid #eeeeee;
    justify-content: flex-end;
  }

  .modal-body {
    position: relative;
    padding: 50px 10px;
        font-family: 'Rammetto One', cursive;
    text-align: center;
    color: orange;
    font-weight: bold;
    font-size: 32px;
    -webkit-text-stroke: 1px black;
    text-shadow: 3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
    text-align: center;
  }

  .btn-close {
    border: none;
    font-size: 20px;
    padding: 20px;
    cursor: pointer;
    font-weight: bold;
    color: #4AAE9B;
    background: transparent;
  }

  .btn-green {
    color: white;
    background: #4AAE9B;
    border: 1px solid #4AAE9B;
    border-radius: 2px;
  }
   .modal-fade-enter,
  .modal-fade-leave-active {
    opacity: 0;
  }

  .modal-fade-enter-active,
  .modal-fade-leave-active {
    transition: opacity .5s ease
  }
</style>