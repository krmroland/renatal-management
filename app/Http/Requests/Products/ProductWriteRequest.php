<?php

namespace App\Http\Requests\Products;

use Illuminate\Validation\Rule;
use App\Products\Models\Product;

class ProductWriteRequest extends BaseProductRequest
{
    /**
     * Gets the permission name
     * @return string
     */
    public function permissionName()
    {
        return 'products.write';
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required|string',
            'currency' => 'required',
            'details' => 'array',
            'total_cost' => 'numeric',
            'type' => ['required', Rule::in(Product::TYPES)],
        ];
    }
}