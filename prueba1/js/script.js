/** Componente bienvenida */

Vue.component('bienvenida', {
	template: `
		<div class="componente">
      {{ mensaje }}
		</div>`,
	data: function() {
		return {
			mensaje: 'Hola, buenos dias, buenas tardes, buenas noches.'
		}
	}
})

/** Componente propuesta */

Vue.component('propuesta', {
	template: `
		<div class="componente">
      {{ mensaje }}
		</div>`,
	data: function() {
		return {
			mensaje: 'Esto es una propuesta para usted'
		}
	}
})

/** Componente quevendemos */

Vue.component('quevendemos', {
	template: `
		<div class="componente">
      <img v-bind:src="ruta">
		</div>`,
	data: function() {
		return {
			ruta: './img/auto.png'
		}
	}
})

/** Componente quienessomos */

Vue.component('quienessomos', {
	template: `
		<div class="componente">
			{{ mensaje }}
		</div>`,
	data: function() {
		return {
			mensaje: 'Los que venden autos amarillos'
		}
	}
})

var app = new Vue({
  el: '#app',
  data: {
    input_bienvenida: false,
    input_propuesta: false,
    input_que_vendemos: false,
    input_quienes_somos: false,
    input_todos: false
  },
  methods: {
    mostrar_todos() {
      if (this.input_todos) {
        this.input_bienvenida= true
        this.input_propuesta= true
        this.input_que_vendemos= true
        this.input_quienes_somos= true
      } else {
        this.input_bienvenida= false
        this.input_propuesta= false
        this.input_que_vendemos= false
        this.input_quienes_somos= false
      }
    },
    reset_input_todos() {
      if (!this.input_bienvenida || !this.input_propuesta || !this.input_que_vendemos || !this.input_quienes_somos) {
        this.input_todos = false
      }
    }
  }
})