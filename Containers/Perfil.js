import React, {Component} from 'react';
import {
    StyleSheet,
	Text,
	Image,
    ScrollView,
    View,
    TouchableOpacity,
    Modal
} from 'react-native';
import Metrics from '../Themes/Metrics'

import Images from '../Images'

const perfiles = [
    {image: Images.rrhh, text: 'Recursos Humanos', description: 'Selección, capacitación y supervisión del personal de Hato viejo.'},
    {image: Images.contabilidad, text: 'Contabilidad',
    description: 'Se encarga de instrumentar y operar las políticas, normas, sistemas y procedimientos necesarios para garantizar la exactitud y seguridad en la captación y registro de las operaciones financieras, presupuestales y de consecución de metas de la entidad.'},
    {image: Images.mercadeo, text: 'Mercadeo', 
        description: 'Investigación de mercados, ejecución y planificación de estrategias relacionadas a las 4 P del mercado, márgenes de utilidad, imagen y posicionamiento de marcas. Lanzamiento de nuevos productos, para el desarrollo de negocios con la finalidad de satisfacer a nuestros consumidores.'},
    {image: Images.produccion, text: 'Producción', 
        description: 'Procesos de manufactura, logística, abastecimiento, calidad y mantenimiento, garantizando la eficiencia y eficacia en la gestión de los costos operacionales.'},
    {image: Images.admin, text: 'Administracion', 
        description: 'Planificar, organizar dirigir y controlar todos los procesos administrativos de nuestra empresa orientado a la gestión financiera, fiscal, compras, humana y tecnológica.'},
    {image: Images.ventas, text: 'Ventas', description: 'Elaborar pronósticos de ventas, establecer precios, realizar publicidad y promoción de ventas, llevar un adecuado control y análisis de las ventas.'},
    {image: Images.sistemas, text: 'Sistemas', description: 'Administra los bienes y servicios de la plataforma tecnológica en Software y Hardware, el soporte técnico de los equipos, el desarrollo y mantenimiento de las aplicaciones y la administración de los servidores Institucionales para asegurar el correcto funcionamiento de las tareas diarias.'},
    {image: Images.diseno, text: 'Diseño Gráfico', description: 'Comunicar la ideas valores y conceptos de nuestros clientes gráficamente. El objetivo de este proceso es crear un soporte visual que sea capaz de trasladar y comunicar un mensaje concreto a nuestro público objetivo.'},

]
class Perfil extends Component {
    state = {
        modal: false,
        selected: null
    }

    renderModalContent(){
        const selected = perfiles[this.state.selected]
        return (
            <View style={styles.modal}>
                <Image
                    resizeMode='contain'      
                    source={selected.image}
                    style={styles.image}
                />
                <Text style={[styles.text, {marginTop: 10, marginBottom: 20}]}>{selected.text}</Text>
                {selected.description && <Text style={styles.description}>{selected.description}</Text>}
            </View>
        )
    }
    render(){
        return (
            <ScrollView style={styles.main} contentContainerStyle={styles.container}>
                {perfiles.map((perfil, index) =>
                    <TouchableOpacity
                        key={index}
                        activeOpacity={0.7}
                        style={styles.itemContainer}
                        onPress={() => this.setState({ modal: true, selected: index })}
                    >
                        <View style={styles.item}>
                            <Image
                                resizeMode='contain'      
                                source={perfil.image}
                                style={styles.image}
                            />
                            <Text style={styles.text}>{perfil.text}</Text>
                        </View>
                    </TouchableOpacity>
                )}

                    <Modal
                        animationType="fade"
                        transparent={true}
                        visible={this.state.modal}
                        onRequestClose={() => this.setState({ modal: false })}
                    >
                        <TouchableOpacity 
                            style={styles.modalContainer}
                            onPress={() => this.setState({ modal: false, selected: null
                            })}
                        >
                                {this.state.selected != null ? this.renderModalContent() : null}
                        </TouchableOpacity>
                    </Modal>

            </ScrollView>
        );
    }

}
const styles = StyleSheet.create({
    main: {
        backgroundColor: '#a6cbe2'
    },
	container: {
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
    },
    itemContainer: {
        width: '50%',
        padding: 10,
    },
    item: {
        backgroundColor: '#b4ddfb',
        flex: 1,
        alignItems: 'center',
        paddingVertical: 20,
        paddingHorizontal: 5
    },
    text: {
        fontWeight: '500',
        fontSize: 16,
        textAlign: 'center',
        color: '#d58a36'
    },
    description: {
        fontWeight: '300',
        fontSize: 18,
        color: '#d58a36',
        textAlign: 'center',
        paddingHorizontal: 15
    },
    modalContainer: {
        backgroundColor: 'rgba(52, 52, 52, 0.65)',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    modal: {
        width: Metrics.screenWidth * 0.8,
        backgroundColor: '#b4ddfb',
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 30
    },
    image: {
        width: '100%',
        height: 100
    }
});
export default Perfil