<template>
    <LayoutModal @closeModal="closeModal">
        <div class="modal-map" ref="modalMap">
            <div class="modal-map__title">ЗОНА ДОСТАВКИ</div>
            <div class="modal-map__box" ref="map"></div>
        </div>
    </LayoutModal>
</template>

<script>
    import LayoutModal from "@/layout/LayoutModal"

    export default {
        name: "ModalMap",
        components: {
            LayoutModal
        },
        mounted() {
            this.mapCreate()
        },
        computed: {
            restaurants() {
                return this.$store.getters.RESTAURANTS
            },
            isMapScriptLoad() {
                return this.$store.getters.IS_MAP_SCRIPT_LOAD
            }
        },
        methods: {
            closeModal() {
                this.$store.commit('SET_MODAL_MAP_SHOW', false)
            },
            mapCreate() {
                const mapRef = this.$refs.map
                const restaurants = this.restaurants

                if (!this.isMapScriptLoad) {
                    const mapScript = document.createElement('script')
                    mapScript.src = 'yandex-map.js'

                    const modalMap = document.querySelector('.modal-map')
                    modalMap.appendChild(mapScript)

                    mapScript.addEventListener('load', function () {
                        /* global ymaps */
                        /* eslint no-undef: "error" */
                        ymaps.ready(mapInit)
                    })
                    this.$store.commit("SET_IS_MAP_SCRIPT_LOAD", true)
                } else {
                    mapInit()
                }

                function mapInit() {
                    const myMap = new ymaps.Map(mapRef, {
                        center: [58.602909, 49.674555],
                        zoom: 12
                    })

                    function MyBalloonContentLayout (caption, workTime) {
                        return `<div class="placemark">
                            <div class="placemark-caption">${caption}</div>
                            <div class="placemark-work-time">Время работы: ${workTime}</div>
                        </div>`
                    }

                    restaurants.forEach((restaurant) => {
                        const coords = restaurant.coords
                        const caption = restaurant.address
                        const work_time = restaurant.work_time
                        createPlacemark(coords, caption, work_time)
                    })

                    function createPlacemark(coords, caption, work_time) {
                        const placemark = new ymaps.Placemark(coords, {
                            balloonContentBody: MyBalloonContentLayout(caption, work_time)
                        }, {
                            iconLayout: 'default#image',
                            iconImageHref: '/placemark.png',
                            iconImageSize: [50, 50],
                            iconImageOffset: [-25, -25],
                        })
                        myMap.geoObjects.add(placemark)
                    }
                }
            },
        }
    }
</script>

<style lang="sass">

.placemark

.placemark-caption
    font-size: 16px
    line-height: 18px
    font-weight: 700
    margin-bottom: 10px

.placemark-work-time
    font-size: 13px
    line-height: 14px

</style>

<style lang="sass" scoped>

.modal-map

.modal-map__title
    margin-bottom: 10px
    font-size: 24px
    line-height: 26px
    font-weight: 700
    text-transform: uppercase
    text-align: center
    color: $grey
    letter-spacing: 1.15px

.modal-map__box
    height: 500px

</style>
