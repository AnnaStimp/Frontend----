<template>
  <div class="fixed z-1 min-w-full min-h-full top-0 left-0 flex justify-center items-center bg-gray-600 bg-opacity-75">
    <div class="shadow-sm bg-white pt-6 pr-7 pb-7 pl-6 rounded-lg">
      <h1 class="text-gray-900 font-medium text-2xl mb-5">Заказать звонок</h1>
      <div class="flex text-gray-700 font-medium text-base mb-1">
        <div class="mr-5 flex flex-col">
          <p class="mb-1">Имя*</p>
          <input class="rounded-md border border-gray-300 py-2 px-3 outline-none" type="text" placeholder="Иван Иванов" v-model="name">
          <span class="h-0 text-xs text-red-500 font-normal" :class="{hidden: !(error.find((el) => el == 'name'))}">Обязательное поле</span>
        </div>
        <div class="mr-5 flex flex-col">
          <p class="mb-1">Телефон*</p>
          <input id="phone" class="rounded-md border border-gray-300 py-2 px-3 outline-none" type="text" placeholder="+7 (___) ___-__-__" v-model="phone">
          <span class="h-0 text-xs text-red-500 font-normal" :class="{hidden: !(error.find((el) => el == 'phone'))}">Обязательное поле</span>
        </div>
        <div class="mr-5 flex flex-col">
          <p class="mb-1">Email*</p>
          <input class="rounded-md border border-gray-300 py-2 px-3 outline-none" type="email" v-model="email" placeholder="you@example.com">
          <span class="h-0 text-xs text-red-500 font-normal" :class="{hidden: !(error.find((el) => el == 'email'))}">Обязательное поле</span>
        </div>
        <div class="flex flex-col">
          <p class="mb-1">Город*</p>
          <select name="" id="" class="rounded-md border border-gray-300 py-2 px-3 outline-none" @change="chooseCity($event.target.value)">
            <option v-for="(city, index) in city" :key="index" :value="city.id" :selected="city.id == $store.state.selectCity">{{city.name}}</option>
          </select>
          <span class="h-0 text-xs text-red-500 font-normal mb" :class="{hidden: !(error.find((el) => el == 'city'))}">Обязательное поле</span>
        </div>
      </div>
      <div class="flex justify-end">
        <button class="bg-green-600 px-12 py-2.5 shadow-sm rounded-md text-white mt-7" @click="send()">Отправить</button>
      </div>
    </div>
  </div>
</template>

<script>
  import Inputmask from 'inputmask';

  export default {
    name: 'FeedBack',
    data() {
      return {
        city: [
          {
            id: 1,
            name: "Москва"
          },
          {
            id: 2,
            name: "Санкт-Петербург"
          },
          {
            id: 3,
            name: "Казань"
          }
        ],
        name: '',
        phone: '',
        email: '',
        error: []
      }
    },
    mounted () {
      let mask = new Inputmask("+7 (999) 999-99-99");
      mask.mask(document.getElementById('phone'));
    },
    methods: {
      async send() {
        this.error = []
        let phone = this.phone.replaceAll(' ', '').replaceAll('-', '').replaceAll('_', '').replaceAll('(', '').replaceAll(')', '')
        if (phone.length != 12) {
          this.error.push('phone')
        }
        let reg = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
        let address = this.email;
        if (reg.test(address) == false) {
          this.error.push('email')
        }
        if (!this.name) {
          this.error.push('name')
        }
        if (!this.$store.state.selectCity) {
          this.error.push('city')
        }

        if (this.error.length == 0) {
          const body = {
            name: this.name,
            phone: phone,
            email: address,
            city_id: this.$store.state.selectCity
          }

          let response = await fetch('http://hh.autodrive-agency.ru/test-tasks/front/task7/', {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
              'Content-Type': 'application/json'
            }
          });

          const data = await response;
          console.log(data)
        }

        console.log(this.name, this.phone, this.email, this.$store.state.selectCity)
      },
      chooseCity(id) {
        this.$store.state.selectCity = id
      }
    }
  }
</script>