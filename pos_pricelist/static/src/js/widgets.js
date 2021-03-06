/******************************************************************************
 *    Point Of Sale - Pricelist for POS Odoo
 *    Copyright (C) 2014 Taktik (http://www.taktik.be)
 *    @author Adil Houmadi <ah@taktik.be>
 *
 *    This program is free software: you can redistribute it and/or modify
 *    it under the terms of the GNU Affero General Public License as
 *    published by the Free Software Foundation, either version 3 of the
 *    License, or (at your option) any later version.
 *    This program is distributed in the hope that it will be useful,
 *    but WITHOUT ANY WARRANTY; without even the implied warranty of
 *    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *    GNU Affero General Public License for more details.
 *    You should have received a copy of the GNU Affero General Public License
 *    along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 ******************************************************************************/
function pos_pricelist_widgets(instance, module) {

    module.OrderWidget = module.OrderWidget.extend({
        set_value: function (val) {
            this._super(val);
            var order = this.pos.get('selectedOrder');
            if (this.editable && order.getSelectedLine()) {
                var mode = this.numpad_state.get('mode');
                if (mode === 'price') {
                    order.getSelectedLine().set_manuel_price(true);
                }
            }
        }
    });

    module.OrderButtonWidget = module.OrderButtonWidget.extend({
        selectOrder: function (event) {
            this._super(event);
            var partner = this.order.get_client() ? this.order.get_client() : false;
            this.pos.pricelist_engine.update_products_ui(partner);
        }
    })
}

