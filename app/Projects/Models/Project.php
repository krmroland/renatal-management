<?php

namespace App\Projects\Models;

use App\Models\BaseModel;
use App\Currencies\HasCurrency;
use Illuminate\Validation\Rule;
use Illuminate\Database\Eloquent\Model;

class Project extends BaseModel
{
    use HasCurrency;
    /**
     * The casts array
     * @var array
     */
    protected $casts = ['details' => 'json', 'total_cost' => 'decimal:8,2'];

    /**
     * The available project types
     */
    public const TYPES = ['car', 'house'];
    /**
     * Hooks into the eloquent booting process
     * @return void
     */
    public static function boot()
    {
        parent::boot();
        // let's try to validate the identifier here
        static::saving(function ($model) {
            return $model->validateUniqueIdentifier();
        });
    }
    /**
     * Validates the unique indetifier before saving
     * @return void
     * @throws Validation Exception
     */
    public function validateUniqueIdentifier()
    {
        return validator()->validate($this->only('identifier'), [
            'identifier' => Rule::unique('projects')
                ->ignore($this->id)
                ->where(function ($query) {
                    $query->where($this->only(['owner_id', 'owner_type']));
                }),
        ]);
    }
}
